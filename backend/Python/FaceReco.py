import cv2
import face_recognition
import os
import numpy as np
from datetime import datetime
import pickle

import socket
path = 'KnownPeople'

images = []
classNames = os.listdir(path)
mylist = os.listdir(path)

# Read all known images 
for cl in mylist:
    curImg = cv2.imread(f'{path}/{cl}')
    images.append(curImg)
    classNames.append(os.path.splitext(cl)[0])

# find the encodig for all known images
def findEncodings(images):
    # Get all features and ids from database for each user
    encodeList = []
    Ids=[]
    # for img in images:
    #     img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    #     encoded_face = face_recognition.face_encodings(img)[0]
    #     encodeList.append(encoded_face)
    return encodeList,Ids
encoded_face_train,usersIds = findEncodings(images)

# Set the attendance for user if not attended before
# def markAttendance(name):
    # with open('Attendance.csv','r+') as f:
    #     myDataList = f.readlines()
    #     nameList = []
    #     for line in myDataList:
    #         entry = line.split(',')
    #         nameList.append(entry[0])
    #     if name not in nameList:
    #         now = datetime.now()
    #         time = now.strftime('%I:%M:%S:%p')
    #         date = now.strftime('%d-%B-%Y')
    #         f.writelines(f'\n n{name}, {time}, {date}')

# receive user image and check if user in database or not 
def GetUser(img):
    # success, img = cap.read()
    imgS = cv2.resize(img, (0,0), None, 0.25,0.25) #resize the image for 0.25 of its original scall 
    imgS = cv2.cvtColor(imgS, cv2.COLOR_BGR2RGB)
    faces_in_frame = face_recognition.face_locations(imgS)
    encoded_faces = face_recognition.face_encodings(imgS, faces_in_frame)
    print(len(faces_in_frame))
    if(len(faces_in_frame)==0):
        print("Try to be clear in image we can't find you")
    elif(len(faces_in_frame) > 1):
        print("There are more than one person in the camera, please be alone to enter")
    else:
        for encode_face, faceloc in zip(encoded_faces,faces_in_frame):
            matches = face_recognition.compare_faces(encoded_face_train, encode_face)
            faceDist = face_recognition.face_distance(encoded_face_train, encode_face)
            matchIndex = np.argmin(faceDist)
            
            if matches[matchIndex] and faceDist[matchIndex]<0.5:
                return usersIds[matchIndex]  
    print("Try to register")

                # name = classNames[matchIndex].upper().lower()
                # y1,x2,y2,x1 = faceloc
                # since we scaled down by 4 times
                # y1, x2,y2,x1 = y1*4,x2*4,y2*4,x1*4
                # cv2.rectangle(img,(x1,y1),(x2,y2),(0,255,0),2)
                # cv2.rectangle(img, (x1,y2-35),(x2,y2), (0,255,0), cv2.FILLED)
                # cv2.putText(img,name, (x1+6,y2-5), cv2.FONT_HERSHEY_COMPLEX,1,(255,255,255),2)
                # markAttendance(name)


def NewUser(img):
    imgS = cv2.resize(img, (0,0), None, 0.25,0.25) #resize the image for 0.25 of its original scall 
    imgS = cv2.cvtColor(imgS, cv2.COLOR_BGR2RGB)
    faces_in_frame = face_recognition.face_locations(imgS)
    encoded_faces = face_recognition.face_encodings(imgS, faces_in_frame)
    print(len(faces_in_frame))
    if(len(faces_in_frame)==0):
        print("Try to be clear in image we can't find you")
    elif(len(faces_in_frame) > 1):
        print("There are more than one person in the camera, please be alone to enter")
    else:
        for encode_face, faceloc in zip(encoded_faces,faces_in_frame):
            matches = face_recognition.compare_faces(encoded_face_train, encode_face)
            faceDist = face_recognition.face_distance(encoded_face_train, encode_face)
            matchIndex = np.argmin(faceDist)
            
            if matches[matchIndex] and faceDist[matchIndex]<0.5:
                print ("You already have account")
        #return users feature


from PIL import Image
import requests
from io import BytesIO
import base64
img="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"
image_data = base64.b64decode(img)
# Create a BytesIO object to work with the image
image_stream = BytesIO(image_data)
# Open the image using PIL
image = Image.open(image_stream)
image.show()