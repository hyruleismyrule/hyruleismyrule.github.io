INSERT INTO clients (clientFirstname, clientLastName, clientEmail, clientPassword, clientLevel, comment) VALUES ('Tony', 'Stark', 'tony@starkent.com', 'Iam1ronM@n', 1, 'I am the real Iron Man');

UPDATE clients SET clientLevel = 3 WHERE clientFirstname = 'Tony' AND clientLastName = 'Stark';

UPDATE inventory SET invDescription = 'Do you have 6 kids and like to go off-roading? The Hummer gives you the spacious interiors with an engine to get you out of any muddy or rocky situation.' WHERE invMake = 'GM' AND invModel = 'Hummer';

SELECT inventory.invModel, carclassification.classificationName FROM inventory INNER JOIN carclassification ON inventory.invId = carclassification.classificationId WHERE carclassification.classificationName = 'SUV';

DELETE FROM inventory WHERE invMake = 'Jeep' and invModel = 'Wrangler';

UPDATE inventory SET invImage = CONCAT('/phpmotors', invImage), invThumbnail = CONCAT('/phpmotors', invThumbnail);