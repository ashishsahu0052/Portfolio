/* eslint-disable react/prop-types */
//const linkedinUrl = "https://www.linkedin.com/in/ashish-sahu-0052/";

const ProfileCard = ({
  avatarUrl,
  miniAvatarUrl,
  name,
  title,
  location,
  handle,
  status,
  contactText,
  linkedinUrl,
}) => {
  const handleContactClick = () => {
    if (linkedinUrl) {
      window.open(
        linkedinUrl,
        "https://www.linkedin.com/in/ashish-sahu-20a83033a/",
      );
    }
  };

  return (
    <div className="bg-[#101318] rounded-2xl overflow-hidden border border-gray-800 shadow-lg max-w-sm mx-auto">
      <img
        src={avatarUrl}
        alt={name}
        className="w-full h-[480px] object-contain bg-black"
      />

      <div className="p-4">
        <h2 className="text-2xl font-bold text-white">{name}</h2>

        <p className="text-[#27CBCB] mt-1">{title}</p>

        <button
          onClick={handleContactClick}
          className="mt-5 w-full bg-[#27CBCB] text-black py-2 rounded-lg font-medium hover:opacity-90"
        >
          {contactText}
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
