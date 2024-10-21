import Link from 'next/link';

const InfoBox = ({
  heading,
  description,
  backgroundColor = 'bg-gray-100',
  textColor = 'text-gray-800',
  buttonInfo,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-between ${backgroundColor} p-6 rounded-lg shadow-md`}
    >
      <h2 className={`${textColor} text-2xl text-center font-bold`}>{heading}</h2>
      <p className={`${textColor} my-2`}>{description}</p>
      <Link
        href={buttonInfo.link}
        className={`${buttonInfo.backgroundColor} hover:bg-gray-700 inline-block text-white rounded-lg px-4 py-2 mt-2`}
      >
        {buttonInfo.text}
      </Link>
    </div>
  );
};

export default InfoBox;
