print()
print()
# Introduction
print("You and some friends are visiting an abandoned house on Halloween. The full moon is barely visible through the clouds and fog. \nThe house has clearly been abandoned for years and the windows are boarded up and mother nature has already begun to reclaim the land covering the outside with ivy. \nYou walk through the tall grass and reach the front of the house. The stairs are broken so your friend Shane helps you onto the porch and swiftly climbs up himself. \nYour friend Maria takes off her backpack and places it on the porch with a loud thud before Shane helps her up too. \nThe three of you manage to pry open the door with a crowbar from Maria's backpack. Inside is completely dark. \nYou turn on your phone flashlights and see that the house is a complete mess.")
# print()
print("“Let's explore the basement,” Shane says. You follow Shane down the stairs into the basement.")
# print()
print("“Well, I'm going to stay and explore the ground floor first,” Maria yells down to you.")
# print()
print("The temperature seems to drop, and you wish you had brought gloves. Some of the stairs are missing so you have to be extra careful. \nThe staircase seems to be impossibly long for the size of the old house, but you both reach the bottom in one piece. \nYou look around and see that the basement is partially flooded and there is much antique furniture covered in white sheets. \nShane immediately looks for any valuables rummaging in drawers and picking things out of the water.")
print()
# First Choice (Doll/ Painting/ Piano)
choice_1 = input("You see a DOLL, a PAINTING, and a PIANO. Which one do you want to investigate? ")
print()
# If you Choose Doll (A)
if choice_1.lower() == "doll":
    print("You see a surprising amount of dolls in the room, some of them in a really bad condition. You see one floating in the water. You pull it out by the hair. \nIt is unexpectedly heavy… then you realize: It's a human head! Decapitated and rotten. You scream! \nYou drop the head and frantically try to get out of the murky water, afraid that you might touch the rest of the body. \nShane runs over to you.")
    # print()
    print("“What's wrong?!”")
    # print()
    print("You stutter and explain what you saw whipping your hands on your clothes to get the grime off them. Now you really wish you had brought gloves. \nShane seems really creeped out and asks if you want to call the police? \nYou were breaking and entering, so you might be arrested, but you think of the person who died and wonder if they would like to be found.")
    print()
# If you Choose Painting (B)
if choice_1.lower() == "painting":
    print("You see a painting covered by a sheet that was high up enough on an easel to avoid getting wet. You pull it down to see a picture of an old woman. \nHer eyes are scratched out and underneath the scratch marks is a mirror reflecting your eyes back at you. It gives you a really creepy feeling. \nLooking closer you see that the old woman is holding a red jewel and a snake. \nYou turn the painting slightly to get a closer look at the side when in the reflection of the mirror you see the old woman standing behind you! \nYou gasp and turn around when she lunges at you with her hands like claws and her mouth open too wide screaming. \nYou fall back into the water and you are immediately pulled up by the arm. \nShane was at your side.")
    # print()
    print("“Are you ok?! What happened?”")
    # print()
    print("You explain what you saw, but you are getting really cold fast now that you're all wet. You also notice that Shane has deep scratches along his forearm. \nYou bandage it up with one of the white sheets and wrap yourself with another, but you think that he needs medical attention.")
    print()
# If you Choose Piano (C)
if choice_1.lower() == "piano":
    print("You look around and see a piano. You go over to it to get a closer look you lift the top of the piano and the inside is full of spiders! \nYou scream and back up checking to see if there are any spiders on you. Shane comes over and makes sure that you are ok. \nTo calm you down, he shows you that he actually found a red jewel. He offers to split the money with you when he sells it. \nYou then get excited but wonder if it would be legal to keep the jewel, or if you should report it to the authorities.")
    print()
# Second Choice (Call the Police Yes/ No)
choice_2 = input("Do you want to call the police? YES or NO. ")
print()
# If you Choose Yes
if choice_2.lower() == "yes":
    print("You have no reception in the basement, so you and Shane quickly go upstairs. Shane almost falls, but you catch his hand and pull him back. \nWhen you reach the ground floor you run to the door but find that it has been boarded up and locked. \nYou call the police and frantically state what you saw, tell them your situation, and give them the address of the house. \nThe dispatcher seems a little confused but tries to hide it.")
    # print()
    print("“Can you give me your location again?”")
    # print()
    print("You repeat the address of the house, but the dispatcher says “We have already dispatched police to that location because someone called in three bodies. \nCan you stay on the line so that we can track your location?”")
    # print()
    print("You stay on the phone, but you are getting more and more panicked. You tell Shane “If the police should be here, why haven't we seen them?! \nDid Maria lock us in as a joke? Also three bodies… that's really creepy.”")
    # print()
    print("“Let's stay calm, they can track our location and they'll get here soon. I'll try to get the door open.")
    print()
    # Third Choice (Window/ Door)
    choice_3 = input("You don't want to stand around doing nothing, so do you try to open the WINDOW, or help Shane with the DOOR? ")
    print()
    # If you Choose Door (A/ B/ C)
    if choice_3.lower() == "door":
        # Monster A
        if choice_1.lower() == "doll":
            print("You cand Shane kick at the door trying to open it. You suddenly feel a hand on your shoulder and you jump and turn around to see a headless walking corpse! \nYou kick it and run away, screaming. Shane grabs a wooden board and hits the corpse knocking it to the ground. \nYou both grab its feet and drag it and throw it down the stairs trying to buy more time. You quickly go back to the door and kick again, breaking it open! \nYou both run onto the porch and almost fall off forgetting that there are no stairs. \nYou both climb down and you reach for your phone to tell the dispatcher what happened when you realize that it's gone! \nShane can't find his phone either, but neither of you wants to stay here any longer. You both run home forgetting about the police and Maria.")
            print()
            print()
        # Monster B
        elif choice_1.lower() == "painting":
            print("You cand Shane kick at the door trying to open it. You suddenly feel a hand on your shoulder and you jump and turn around to see the old woman from before! \nYou strike first this time and kick her and run away, screaming. Shane grabs a wooden board and hits the woman knocking her to the ground. \nYou both grab her feet and drag her and throw her down the stairs trying to buy more time. \nYou quickly go back to the door and kick again, breaking it open! You both run onto the porch and almost fall off forgetting that there are no stairs. \nYou both climb down and you reach for your phone to tell the dispatcher what happened when you realize that it's gone! \nShane can't find his phone either, but neither of you wants to stay here any longer. You both run home forgetting about the police and Maria.")
            print()
            print()
        # Monster C
        elif choice_1.lower() == "piano":
            print("You cand Shane kick at the door trying to open it. You hear a voice behind you and you jump! You turn around and it's Maria! \nYou breathe a sigh of relief and ask her how her investigation went. \nShe says that she heard some screams, but said that they sounded like they belonged to us so she came back. \nShe says she has no idea why the door was locked but assumes that it was ghosts. \nShe gives Shane the crowbar and he pries the door open. You then see a cop car pull up and you go to give your statements to the police. \nThey end up letting you off with a warning letting you keep the jewel.")
            print()
            print()
    if choice_3.lower() == "window":
        print("You look around for something to pry the boards off the window with, regretting that Maria took it with her. Wait a minute, where is Maria? \nYou tell Shane that you are going to look for Maria and tell her what happened and get the crowbar from her. \nShe was supposed to be on this floor, but there was no sign of her. You go upstairs and find Maria sitting and crying at the top. \nYou go up to her and ask her what's wrong. She points across the landing where there are three dead bodies, rotting. They look exactly like Shane, Maria and You. \nShe mumbles that she already called the police and that they should be here soon. You take her arm and lead her downstairs. \nShane had already broken open the door and was waiting for us. We met the police outside and they listened to our crazy stories.")
        print()
        print()
# If you Choose No
if choice_2.lower() == "no":
    print("You still don't feel like sticking around in the basement, so you go back upstairs and find that the door is locked. You and Shane try kicking down the door. \nSuddenly you hear a gunshot from behind and Shane collapses next to you. You turn around and the last thing that you see is Maria holding a gun pointed at you.")
    print()
    print()