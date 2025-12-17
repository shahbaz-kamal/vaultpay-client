"use client";

import { CircleUserRoundIcon, XIcon } from "lucide-react";

import { useFileUpload } from "@/hooks/use-file-upload";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface IProps {
  initialProfilePicture: string | null;
  onChange: any;
}

export default function ProfilePictureUploader({ initialProfilePicture = null, onChange }: IProps) {
  const [{ files }, { removeFile, openFileDialog, getInputProps }] = useFileUpload({
    accept: "image/*",
  });



  const [initialImage, setInitialImage] = useState(initialProfilePicture);

  const previewUrl = files[0]?.preview || initialImage || null;

  const fileName = files[0]?.file.name || null;
// console.log("Inside image uploader",files)
  useEffect(() => {
    if (files.length > 0) onChange(files[0].file);
    else onChange(null);
  }, [files]);

  return (
    <div className="flex flex-col items-center gap-2 w-full ">
      <div className="relative inline-flex w-[200px] h-[200px]">
        <Button
          aria-label={previewUrl ? "Change image" : "Upload image"}
          className="relative w-full h-full overflow-hidden p-0 shadow-none"
          onClick={openFileDialog}
          variant="outline"
        >
          {previewUrl ? (
            <img
              alt="Upload preview"
              className="size-full object-cover"
              height={64}
              src={previewUrl}
              style={{ objectFit: "cover" }}
              width={64}
            />
          ) : (
            <div aria-hidden="true">
              <CircleUserRoundIcon className="size-4 opacity-60" />
            </div>
          )}
        </Button>
        {previewUrl && (
          <Button
            aria-label="Remove image"
            onClick={() => {
              if (files[0]) {
                removeFile(files[0]?.id);
              } else {
                setInitialImage(null);
              }
            }}
            className="-top-2 -right-2 absolute size-6 rounded-full border-2 border-background shadow-none"
            size="icon"
          >
            <XIcon className="size-3.5" />
          </Button>
        )}

        <input {...getInputProps()} aria-label="Upload image file" className="sr-only" tabIndex={-1} />
      </div>
      {fileName && <p className="text-muted-foreground text-xs">{fileName}</p>}
      <p aria-live="polite" className="mt-2 text-muted-foreground text-xs" role="region">
        Click the Above Image Box to upload
      </p>
    </div>
  );
}
