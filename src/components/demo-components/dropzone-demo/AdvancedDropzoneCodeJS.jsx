import * as React from "react";
import ShowCode from "../../show-code/ShowCode";

const AdvancedDropzoneCodeJS = (props) => {
  return (
    <ShowCode
      codeCompleteJS={completeCodeJS}
      codeCompleteTS={completeCodeTS}
      codeSandboxJS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSandboxTS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSplittedJS={splittedCodeJS}
      codeSplittedTS={splittedCodeTS}
    />
  );
};
export default AdvancedDropzoneCodeJS;

const splittedCodeJS = `<Dropzone
  style={{ minWidth: "550px" }}
  onChange={updateFiles}
  minHeight="195px"
  value={files}
  maxFiles={5}
  maxFileSize={2998000}
  label="Drag'n drop files here or click to browse"
  accept=".png, image/*"
  url="https://my-awsome-server/upload-my-file"
  uploadOnDrop
  fakeUploading
>
  {files.length > 0 &&
     files.map((file) => (
    <FileItem
      {...file}
       key={file.id}
       onDelete={onDelete}
       onSee={handleSee}
       resultOnTooltip
       preview
       info
       hd
    />
  ))}
</Dropzone>`;
const completeCodeJS = `import { Dropzone, FileItem, FullScreenPreview } from "@dropzone-ui/react";
import { useState } from "react";
export default function App() {
  const [files, setFiles] = useState([]);
  const [imageSrc, setImageSrc] = useState(undefined);
  const updateFiles = (incommingFiles) => {
  console.log("incomming files", incommingFiles);
  setFiles(incommingFiles);
  };
  const onDelete = (id) => {
  setFiles(files.filter((x) => x.id !== id));
  };
  const handleSee = (imageSource) => {
  setImageSrc(imageSource);
  };
  const handleClean = (files) => {
  console.log("list cleaned", files);
  };
  return (
  <>
    <Dropzone
    style={{ minWidth: "550px" }}
    onChange={updateFiles}
    minHeight="195px"
    value={files}
    maxFiles={5}
    maxFileSize={2998000}
    label="Drag'n drop files here or click to browse"
    accept=".png,image/*"
    url="https://my-awsome-server/upload-my-file"
    uploadOnDrop
    fakeUploading
    >
    {files.length > 0 &&
      files.map((file) => (
      <FileItem
        {...file}
        key={file.id}
        onDelete={onDelete}
        onSee={handleSee}
        resultOnTooltip
        preview
        info
        hd
      />
      ))}
    </Dropzone>
    <FullScreenPreview
    imgSource={imageSrc}
    openImage={imageSrc}
    onClose={(e) => handleSee(undefined)}
    />
  </>
  );
}`;

const completeCodeTS = completeCodeJS;
const splittedCodeTS = splittedCodeJS;
