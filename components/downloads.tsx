import { Download } from "lucide-react";
import { Button } from "./ui/button";

export interface DownloadItem {
  name: string;
  url: string;
  type: "pdf" | "doc" | "zip" | "other";
}

interface DownloadsProps {
  downloads: DownloadItem[];
}

export function Downloads({ downloads }: DownloadsProps) {
  const handleDownload = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div className="mt-4 pt-4 border-t border-slate-700">
      <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">
        Downloads
      </h4>
      <div className="space-y-2">
        {downloads.map((download, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            onClick={() => handleDownload(download.url)}
            className="w-full justify-between text-left"
          >
            <span>{download.name}</span>
            <Download className="w-4 h-4" />
          </Button>
        ))}
      </div>
    </div>
  );
}
