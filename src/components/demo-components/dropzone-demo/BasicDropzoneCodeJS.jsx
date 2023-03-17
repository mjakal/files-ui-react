import ShowDemoCode from "../../show-demo-code/ShowDemoCode";
const BasicDropzoneCode = ({ splittedOnly = false, button=false }) => {
  return (
    <ShowDemoCode
      splittedOnly={splittedOnly}
      codeCompleteJS={button?splittedCodeJSButton:completeCodeJS}
      codeCompleteTS={button?splittedCodeTSButton:completeCodeTS}
      codeSandboxJS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSandboxTS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSplittedJS={button?splittedCodeJSButton:splittedCodeJS}
      codeSplittedTS={button?splittedCodeTSButton:splittedCodeTS}
    />
  );
};
export default BasicDropzoneCode;

const splittedCodeJSButton = `<FileInputButton onChange={updateFiles} value={files} />
{files.map((file) => (
  <FileCard key={file.id} {...file} onDelete={removeFile} info />
))}`;
const splittedCodeTSButton = splittedCodeJSButton;
//////////
const splittedCodeJS = `<Dropzone
  onChange={updateFiles}
  value={files}
>
  {files.length > 0 &&
    files.map((file) => (
      <FileMosaic key={file.id} {...file} onDelete={removeFile} info/>
    ))}
</Dropzone>`;
const splittedCodeTS = `<Dropzone
  onChange={updateFiles}
  value={files}
>
  {files.length > 0 &&
    files.map((file: ExtFile) => (
      <FileMosaic key={file.id} {...file} onDelete={removeFile} info={true}/>
    ))}
</Dropzone>`;
const completeCodeJS = `import { Dropzone,FileMosaic } from "@files-ui/react";
import * as React from "react";

export default function BasicDemoDropzone() {
  const [files, setFiles] = React.useState([]);
  const updateFiles = (incommingFiles) => {
    //do something with the files
    setFiles(incommingFiles);
    //even your own upload implementation
  };
  const removeFile = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  return (
    <Dropzone
      onChange={updateFiles}
      value={files}
    >
      {files.length > 0 &&
        files.map((file) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
        ))}
    </Dropzone>
  );
}`;

const completeCodeTS = `import { Dropzone, FileMosaic, ExtFile } from "@files-ui/react";
import * as React from "react";

export default function BasicDemoDropzone() {
  const [files, setFiles] = React.useState<ExtFile[]>([]);
  const updateFiles = (incommingFiles:ExtFile[]) => {
    //do something with the files
    setFiles(incommingFiles);
    //even your own upload implementation
  };
  const removeFile = (id: string | number | undefined) => {
    setFiles(files.filter((x: ExtFile) => x.id !== id));
  };
  return (
    <Dropzone
      onChange={updateFiles}
      value={files}
    >
      {files.length > 0 &&
        files.map((file:ExtFile) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info={true} />
        ))}
    </Dropzone>
  );
}`;
