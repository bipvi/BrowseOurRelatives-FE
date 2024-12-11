import { baseUrl } from "../../redux/actions";

export default function FileImg({it}) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(`${baseUrl}/${it.tipo.toLowerCase()}`, {
        method: "PATCH",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <input
        type="file"
        className="file-input file-input-bordered file-input-success w-full max-w-xs"
      />
      <button onClick={handleUpload}>Upload</button>
    </>
  );
}
