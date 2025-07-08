import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const propert = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;
      setError(null);
      try {
        const response = await axios.get(
          `https://kgn.com/api/properties/${id}`
        );
        setProperty(response.data);
      } catch (error) {
        console.error("Error fetching property details:", error);
        setError("Error fetching property details");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  console.log(property); // To be removed after testing

  if (loading) {
    return (
      <p className="text-red-500 text-center text-sm font-semibold mt-4">
        Loading...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-red-500 text-center text-sm font-semibold mt-4">
        {error}
      </p>
    );
  }

  if (!propert)
    return (
      <p className="text-red-500 text-center text-sm font-semibold mt-4">
        Property not found
      </p>
    );

  return (
    <div>
      <PropertyDetail property={propert} />
    </div>
  );
}
