﻿
// Create the picker object and set options
var openPicker = new Windows.Storage.Pickers.FileOpenPicker();
openPicker.viewMode = Windows.Storage.Pickers.PickerViewMode.thumbnail;
openPicker.suggestedStartLocation = Windows.Storage.Pickers.PickerLocationId.picturesLibrary;
// Users expect to have a filtered view of their folders depending on the scenario.
// For example, when choosing a documents folder, restrict the filetypes to documents for your application.
openPicker.fileTypeFilter.replaceAll([".png", ".jpg", ".jpeg"]);

// Open the picker for the user to pick a file
openPicker.pickSingleFileAsync().then(function (file) {
    if (file) {
        // Application now has read/write access to the picked file
        WinJS.log && WinJS.log("Picked photo: " + file.name, "sample", "status");
    } else {
        // The picker was dismissed with no selected file
        WinJS.log && WinJS.log("Operation cancelled.", "sample", "status");
    }
});
