import { BsInboxFill } from "react-icons/Bs";
import axios, { AxiosResponse } from "axios";

function UploadBtn() {
  const handleUpload = async (event: any) => {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);

    try {
      const response: AxiosResponse = await axios.post(
        "http://127.0.0.1:3000/file",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="uploadBtn">
      <label htmlFor="file">
        <div className="upload_label">
          <h4>Click to Upload File</h4>
          <BsInboxFill className="icon" />
          <h4>Your file size must be less than 10MB </h4>
        </div>
      </label>

      <input
        type="file"
        id="file"
        name="filename"
        onChange={(event) => handleUpload(event)}
      />
    </div>
  );
}

export default UploadBtn;
