import download from "download";
import axios from "axios";
import fs from "fs";

class Download {
  private location: string;
  async image(path: string) {
    this.location = process.env.FILE_DOWNLOAD_LOCATION;
    const filename = `${Date.now()}.jpg`;
    try {
      await download(path).pipe(
        fs.createWriteStream(`${this.location}/${filename}`)
      );
      return filename;
    } catch (error) {
      console.log("Download Failed");
    }
  }

  async file(fileUrl: string) {
    this.location = process.env.FILE_DOWNLOAD_LOCATION;
    const filename = `${Date.now()}.jpg`;
    const filePath = this.location + "/" + filename;
    try {
      const response = await axios({
        url: fileUrl,
        method: "GET",
        responseType: "stream",
      });

       // Create a writable stream and pipe the response data into it
       const writer = fs.createWriteStream(filePath);
       response.data.pipe(writer);
 
       // Return a promise that resolves when the stream is finished writing
       return new Promise((resolve, reject) => {
         writer.on('finish', () => resolve(filename));
         writer.on('error', (error) => {
           fs.unlink(filePath, () => reject(error));
         });
        });

    } catch (error) {
      console.log(error.message);
      return null;
    }
  }
}

export default new Download();
