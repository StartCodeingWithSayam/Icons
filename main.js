"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const folderNames = [
    "Accessibility",
    "Alert",
    "Alphabet",
    "Animals",
    "Arrows",
    "Astronomy",
    "Automotive",
    "Buildings",
    "Business",
    "Camping",
    "Charity",
    "Charts + Diagrams",
    "Childhood",
    "Clothing + Fashion",
    "Coding",
    "Communication",
    "Connectivity",
    "Construction",
    "Design",
    "Devices + Hardware",
    "Disaster + Crisis",
    "Editing",
    "Emoji",
    "Education",
    "Energy",
    "Files",
    "Film + Video",
    "Food + Beverage",
    "Fruits + Vegetables",
    "Gaming",
    "Genders",
    "Halloween",
    "Hands",
    "Holidays",
    "Household",
    "Humanitarian",
    "Logistics",
    "Maps",
    "Maritime",
    "Marketing",
    "Mathematics",
    "Media Playback",
    "Medical + Health",
    "Money",
    "Moving",
    "Music + Audio",
    "Nature",
    "Numbers",
    "Photos + Images",
    "Political",
    "Punctuation + Symbols",
    "Religion",
    "Science",
    "Science Fiction",
    "Security",
    "Shapes",
    "Shopping",
    "Social",
    "Spinners",
    "Sports + Fitness",
    "Text Formatting",
    "Time",
    "Toggle",
    "Transportation",
    "Travel + Hotel",
    "Users + People",
    "Weather",
    "Writing",
];
function createFolders() {
    for (let index = 0; index < folderNames.length; index++) {
        const folderPath = "./icons/" + folderNames[index];
        fs_1.default.mkdirSync(folderPath);
        // create sub folders
        fs_1.default.mkdirSync(folderPath + "/solid");
        fs_1.default.mkdirSync(folderPath + "/stroke");
    }
}
// createFolders();
function generateFileNames(path) {
    console.log("generating...");
    const dir = fs_1.default.readdirSync(path).map((item) => {
        return item.split(".")[0];
    });
    const json = JSON.stringify(dir);
    // saving
    fs_1.default.writeFileSync("./temp/names.json", json);
    console.log("done");
}
// generateFileNames('./temp/icons')
// function generate
function renameFileName(path, prefix) {
    const fileName = fs_1.default.readdirSync(path);
    fileName.forEach((element) => {
        let newName = prefix + element;
        let oldPath = path + "/" + element;
        let newPath = path + "/" + newName;
        fs_1.default.renameSync(oldPath, newPath);
    });
}
function removePreFix(path, prefix) {
    const fileName = fs_1.default.readdirSync(path);
    fileName.forEach((element) => {
        let oldPath = path + "/" + element;
        let removed = element.replace(prefix, "");
        let newPath = path + "/" + removed;
        fs_1.default.renameSync(oldPath, newPath);
    });
}
// removePreFix("./Anubhav" , "regularanu")
function removeUnmatchedFile(strokePath, solidPath) {
    const strokeFileName = fs_1.default.readdirSync(strokePath);
    const solidFileName = fs_1.default.readdirSync(solidPath);
    const rejectList = Array();
    strokeFileName.forEach((element) => {
    });
}
