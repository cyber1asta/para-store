import { useState, useEffect } from 'react';  
import { useNavigate } from 'react-router-dom';  
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBirthdayCake, FaBriefcase, FaStar, FaPencilAlt, FaSave, FaSignOutAlt, FaCamera } from 'react-icons/fa';  

const ProfilePage = () => {  
  const navigate = useNavigate();  
  const [isEditing, setIsEditing] = useState(false);  
  const [profileImage, setProfileImage] = useState('');  
  const [userData, setUserData] = useState({  
    name: '',  
    email: '',  
    phone: '',  
    address: '',  
    dob: '',  
    job: '',  
    interests: '',  
    bio: '',  
  });  
  const [editData, setEditData] = useState(userData);  

  useEffect(() => {  
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));  
    if (!loggedInUser) {  
      navigate('/login');  
    } else {  
      setUserData(loggedInUser);  
      setEditData(loggedInUser);  
    }  
  }, [navigate]);  

  const handleImageUpload = (event) => {  
    const file = event.target.files[0];  
    if (file) {  
      const reader = new FileReader();  
      reader.onloadend = () => setProfileImage(reader.result);  
      reader.readAsDataURL(file);  
    }  
  };  

  const handleSave = () => {  
    setUserData(editData);  
    localStorage.setItem("loggedInUser", JSON.stringify(editData));  
    setIsEditing(false);  
  };  

  const handleLogout = () => {  
    localStorage.removeItem("loggedInUser");  
    navigate('/login');  
  };  

  return (  
    <div className="min-h-screen flex items-center justify-center py-12 px-4 bg-gradient-to-b from-blue-300 to-blue-100">  
      <div className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl bg-white">  
        <div className="relative h-56 bg-gradient-to-r from-teal-400 to-teal-300 flex justify-center items-center">  
          {/* أيقونة تغيير الصورة أعلى ملف التعريف */}  
          <label className="absolute top-4 right-4 transform translate-x-1/2 translate-y-1/2">  
            <div className="bg-teal-600 p-2 rounded-full shadow-lg cursor-pointer transition-transform hover:scale-110">  
              <FaCamera className="text-white text-lg" />  
              <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />  
            </div>  
          </label>  
          
          <div className="relative w-36 h-36 overflow-hidden rounded-full border-4 border-white shadow-lg bg-white flex justify-center items-center">  
            {profileImage ? (  
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover rounded-full transition-transform duration-300 transform hover:scale-110" />  
            ) : (  
              <FaUser className="text-gray-200 text-8xl" />  
            )}  
          </div>  
        </div>  

        <div className="pt-20 px-8 pb-8 text-center">  
          <h1 className="text-5xl font-bold text-teal-900 mb-2 shadow-md">{userData.name}</h1>  
          <p className="text-md text-gray-600 mb-4 italic">{userData.bio}</p>  

          <div className="grid grid-cols-1 gap-4 mb-6">  
            {[  
              { icon: <FaEnvelope className="text-teal-500" />, label: userData.email },  
              { icon: <FaPhone className="text-teal-500" />, label: userData.phone },  
              { icon: <FaMapMarkerAlt className="text-teal-500" />, label: userData.address },  
              { icon: <FaBirthdayCake className="text-teal-500" />, label: userData.dob },  
              { icon: <FaBriefcase className="text-teal-500" />, label: userData.job },  
              { icon: <FaStar className="text-teal-500" />, label: userData.interests },  
            ].map((item, index) => (  
              <div key={index} className="flex items-center bg-teal-50 p-4 rounded-lg shadow-md hover:bg-teal-100 transition duration-200">  
                {item.icon}  
                <span className="text-lg text-gray-800 font-semibold ml-3">{item.label}</span>  
              </div>  
            ))}  
          </div>  

          <div className="flex justify-center gap-4 mt-6">  
            <button   
              onClick={() => (isEditing ? handleSave() : setIsEditing(true))}   
              className="px-6 py-3 rounded-lg bg-teal-500 text-white hover:bg-teal-600 transition-all shadow-lg transform hover:scale-105"  
            >  
              {isEditing ? <><FaSave /> Save</> : <><FaPencilAlt /> Edit</>}  
            </button>  
            <button onClick={handleLogout} className="px-6 py-3 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-all shadow-lg transform hover:scale-105">  
              <FaSignOutAlt /> Logout  
            </button>  
          </div>  
        </div>  

        {isEditing && (  
          <div className="px-8 pb-8">  
            <h2 className="text-xl font-semibold text-teal-800 mb-4">Edit Personal Information</h2>  
            {[  
              { label: "Name", value: editData.name, key: "name" },  
              { label: "Email", value: editData.email, key: "email" },  
              { label: "Phone", value: editData.phone, key: "phone" },  
              { label: "Address", value: editData.address, key: "address" },  
              { label: "Date of Birth", value: editData.dob, key: "dob", type: "date" },  
              { label: "Job", value: editData.job, key: "job" },  
              { label: "Interests", value: editData.interests, key: "interests" },  
              { label: "Bio", value: editData.bio, key: "bio", type: "textarea" },  
            ].map((field, index) => (  
              <div key={index} className="mb-4">  
                <label className="block text-gray-700 mb-1">{field.label}</label>  
                {field.type === "textarea" ? (  
                  <textarea   
                    value={field.value}   
                    onChange={(e) => setEditData({ ...editData, [field.key]: e.target.value })}   
                    className="w-full p-2 border border-gray-300 rounded"   
                    rows="4"   
                  />  
                ) : (  
                  <input   
                    type={field.type || "text"}   
                    value={field.value}   
                    onChange={(e) => setEditData({ ...editData, [field.key]: e.target.value })}   
                    className="w-full p-2 border border-gray-300 rounded"   
                  />  
                )}  
              </div>  
            ))}  
          </div>  
        )}  
      </div>  
    </div>  
  );  
};  

export default ProfilePage;