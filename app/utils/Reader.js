const fs= require('fs');

class Reader{
    static readFile(filePath){
        /**
         * Reads a file and returns its contents
         * @param {string} filePath - The path of the file to read
         * @returns {string} - The contents of the file
         */
        return JSON.parse( fs.readFileSync(filePath) );
    }
}

module.exports= Reader;