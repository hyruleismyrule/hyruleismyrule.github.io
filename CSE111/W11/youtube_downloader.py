# https://www.youtube.com/watch?v=IzRGy4dvJpA
# Kate Bush - Running Up That Hill (HQ Audio Remastered) Stranger Things S4

# import requests
# URL = "https://instagram.com/favicon.ico"
# response = requests.get(URL)
# open("CSE111/W11/instagram.ico", "wb").write(response.content)

# print("Worked")

# import requests
# URL = "https://www.youtube.com/watch?v=IzRGy4dvJpA"
# response = requests.get(URL)
# open("CSE111/W11/youtube_video.mp4", "wb").write(response.content)

# print("Worked")

# blob:https://www.youtube.com/abc1e21b-954b-42ac-ba59-70d020bf2e7a

# import requests
# URL = "blob:https://www.youtube.com/abc1e21b-954b-42ac-ba59-70d020bf2e7a"
# response = requests.get(URL)
# open("CSE111/W11/youtube_video.mp4", "wb").write(response.content)

# # importing the module
# from pytube import YouTube

# # where to save
# SAVE_PATH = "CSE111/W11/" #to_do

# # link of the video to be downloaded
# link="https://www.youtube.com/watch?v=IzRGy4dvJpA"

# try:
# 	# object creation using YouTube
# 	# which was imported in the beginning
# 	yt = YouTube(link)
# except:
# 	print("Connection Error") #to handle exception

# # filters out all the files with "mp4" extension
# mp4files = yt.filter('mp4')

# #to set the name of the file
# yt.set_filename('GeeksforGeeks Video')

# # get the video with the extension and
# # resolution passed in the get() function
# d_video = yt.get(mp4files[-1].extension,mp4files[-1].resolution)
# try:
# 	# downloading the video
# 	d_video.download(SAVE_PATH)
# except:
# 	print("Some Error!")
# print('Task Completed!')


# print("Worked")

# # importing the module
# from pytube import YouTube

# # where to save
# SAVE_PATH = "E:/" #to_do

# # link of the video to be downloaded
# link="https://www.youtube.com/watch?v=xWOoBJUqlbI"

# try:
# 	# object creation using YouTube
# 	# which was imported in the beginning
# 	yt = YouTube(link)
# except:
# 	print("Connection Error") #to handle exception

# # filters out all the files with "mp4" extension
# mp4files = yt.filter('mp4')

# #to set the name of the file
# yt.set_filename('GeeksforGeeks Video')

# # get the video with the extension and
# # resolution passed in the get() function
# d_video = yt.get(mp4files[-1].extension,mp4files[-1].resolution)
# try:
# 	# downloading the video
# 	d_video.download(SAVE_PATH)
# except:
# 	print("Some Error!")
# print('Task Completed!')


# def download():
#     url = YouTube(str(link.get())) #This captures the link(url) and locates it from YouTube.
#     video = url.streams.first() # This captures the streams available for downloaded for the video i.e. 360p, 720p, 1080p. etc.
#     video.download() # This is the method with the instruction to download the video.



