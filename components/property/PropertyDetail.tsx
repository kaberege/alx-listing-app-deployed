import { type PropertyProps } from "@/interfaces/index";
import Image from "next/image";
import Button from "../common/Button";
import map from "@/public/assets/icons/Linear/Arrows/Arrow Left.png"

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const style = "border-[1px] border-neutral-300 hover:border-teal-600 rounded-full px-2 py-1 hover:bg-teal-50 hover:text-teal-600 transition-colors hover:shadow-sm hover:shadow-teal-600 focus:ring-2 focus:ring-teal-800";

  return (
    <div className="container mx-auto p-6">
      <section className="flex items-center justify-between">
        <div className="flex sm:hidden items-center justify-center gap-2">
          <Button icon="/assets/icons/Linear/Arrows/Arrow Left.png" alt="return" />
          <span className="text-xs font-medium text-zinc-900">Return</span>
        </div>
        <div className="hidden sm:block">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900">{property.name}</h1>
          <div className="flex items-center space-x-2 mt-2 text-xs font-medium text-neutral-500">
            <div className='flex items-center justify-center gap-1'>
              <Image src="/assets/icons/Star 2.png" width={15} height={15} alt='star' />
              <div className="flex items-center justify-center gap-1">
                <span className="text-zinc-900">{property.rating}</span>
                <span>( 345 reviews )</span>
              </div>
            </div>
            <div className='flex items-center justify-center gap-1'>
              <Image src="/assets/icons/Bold/Map & Location/Map Point.png" width={15} height={15} alt='star' />
              <span>{property.address.state}, {property.address.city}, {property.address.country}</span>
            </div>
            <div className='flex items-center justify-center gap-1'>
              <Image src="/assets/icons/profile 1.png" width={15} height={15} alt='star' />
              <span className=''>Mainstream</span>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex items-center justify-center gap-2">
          <Button label="Save" icon="/assets/icons/Fav.png" alt="Save" styles={style} />
          <Button label="Share" icon="/assets/icons/Share.png" alt="Share" styles={style} />
        </div>
        <div className="flex sm:hidden items-center justify-center gap-2">
          <Button icon="/assets/icons/Fav.png" alt="Save" />
          <Button icon="/assets/icons/Share.png" alt="Share" />
        </div>
      </section>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <img src={property.image} alt={property.name} className="col-span-2 w-full h-96 object-cover rounded-lg" />
        {/* Add more images */}
      </div>

      {/* Description */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p>{property.description.title}</p>
      </div>

      {/* Amenities */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">What this place offers</h2>
        <ul className="flex flex-wrap space-x-4">
          {property.category.map((amenity, index) => (
            <li key={index} className="bg-gray-200 p-2 rounded-md">
              {amenity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PropertyDetail;