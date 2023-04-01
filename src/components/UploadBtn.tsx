import { BsInboxFill } from "react-icons/Bs";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = (type: string, msg: string) => {
  if (type === "success") toast.success(msg);
  if (type === "error") toast.error(msg);
};

function UploadBtn(props: any) {
  const handleUpload = async (event: any) => {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);

    try {
      await axios
        .post("http://127.0.0.1:3000/file", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          props.onUpload();
          notify("success", `Succeed uploading!`);
        })
        .catch((error) => {
          notify("error", `Failed uploading, ${error}`);
        });
    } catch (error) {
      // console.error(error);
      notify("error", `Failed uploading, ${error}`);
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
