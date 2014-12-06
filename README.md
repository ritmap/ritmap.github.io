RIT's Most Interesting Features
================

RIT is a massive campus. There are few things that stand out on this campus such as the Tiger Statue, the Sundial, the fountain that is always soaped, and that funky statue in the middle of the infinity quad. But... did you know RIT has an observatory just off campus? How about the time capsule that's buried just outside the ramp to Monroe Hall? Do you know what that statue between Building 9 and Institute Hall represents? Or did you know that RIT has a fitness lab that does exercise program creation and fitness evaluation? The fact is there are several really cool hidden landmarks, features, and services here at RIT that people might be missing out on.

This github.io page is a webpage that will display each of these locations on an interactive map. Clicking on a location will pop up information regarding it, a description of what it represents, a link to more information, and/or a picture.

With all of these features mapped, it can give students more insight as to what they are walking past every day. They might even discover services they had no idea RIT had to offer!

Submitting Content
================

Have a place you want to add to the map?  Fork this repo, and submit a pull request.  Add your data to js/data.js in the proper JSON format.  The JSON is split into the following parts:
* title - The name of the location or feature
* lat - The latitude GPS coordinates of the location or feature.  This should be positive.
* lon - The longitude GPS coordinates of the location or feature.  This should be negative.
* desc - Description of the area.  Please use a meaningful description if possible.  If more information can be found on another site, add a link to it.  To add a url, use the html tag <a href="url" target="_blank">link description</a>.  To add a new line, type </p><p>. If you do not want a new line, do not include these tags.
* image - The image file name.  Please place the image in media/places.  Set the field to "" if there is no image.

If you have a picture of the place, add it to media/places.
* Please ensure you have permission to upload the image.
* Ensure the picture is less than 400x400 pixels.  Any bigger and it will be rejected.
* For the file name, do not include spaces (replace space characters with '_').  Ensure the file name is all lower case.

Before sending a pull request, please open the index.html file locally first, and ensure nothing is broken.
    