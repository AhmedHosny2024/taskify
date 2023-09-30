import cv2
import face_recognition
import numpy as np

import pyodbc
from flask import Flask,request,jsonify 
from PIL import Image
import requests
from io import BytesIO
import base64



connection = pyodbc.connect(f'Driver=ODBC Driver 17 for SQL Server;Server=AHMEDHOSNY\SQLEXPRESS;Database=Test;Trusted_connection=yes;')
encoded_face_train = []
Ids=[]
Images=[]
if(connection):
    print("yes")
else:
    print("no")
#to load all features and id onces start the server no need to go to database each time
def Start():
    cursor = connection.cursor()
    cursor.execute('SELECT Id,Image FROM Users')
    for row in cursor:
        Ids.append(row[0])
        Images.append(row[1])
    for img in Images:
        response = requests.get(img, verify=False)
        image = Image.open(BytesIO(response.content))
        image=np.array(image)

        # imgS = cv2.resize(image, (0,0), None, 0.5,0.5) #resize the image for 0.25 of its original scall 
        imgS = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        faces_in_frame = face_recognition.face_locations(imgS)
        encoded_face = face_recognition.face_encodings(imgS)[0]
        encoded_face_train.append(encoded_face)
Start()
########################################

def GetUser(img):
    if len(encoded_face_train) == 0:
        jsonify({"error": "Try to register"}),403
    # imgS = cv2.resize(img, (0,0), None, 0.5,0.5) #resize the image for 0.25 of its original scall 
    imgS = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    faces_in_frame = face_recognition.face_locations(imgS)
    encoded_faces = face_recognition.face_encodings(imgS, faces_in_frame)
    if(len(faces_in_frame)==0):
        return jsonify({"error":"Try to be clear in image we can't find you"}),401
    elif(len(faces_in_frame) > 1):
        return jsonify({"error": "There are more than one person in the camera, please be alone to enter"}),402
    else:
        for encode_face, faceloc in zip(encoded_faces,faces_in_frame):
            matches = face_recognition.compare_faces(encoded_face_train, encode_face)
            faceDist = face_recognition.face_distance(encoded_face_train, encode_face)
            matchIndex = np.argmin(faceDist)
            
            if matches[matchIndex] and faceDist[matchIndex]<0.5:
                return jsonify({"Id":Ids[matchIndex]} ),200 
    return jsonify({"error": "Try to register"}),403

def NewUser(img):
    # imgS = cv2.resize(img, (0,0), None, 0.25,0.25) #resize the image for 0.25 of its original scall 
   
    imgS = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    faces_in_frame = face_recognition.face_locations(imgS)
    encoded_faces = face_recognition.face_encodings(imgS, faces_in_frame)
    if(len(faces_in_frame)==0):
        
        return jsonify({"error": "Try to be clear in image we can't find you"}),401
    elif(len(faces_in_frame) > 1):
        return jsonify({"error":"There are more than one person in the camera, please be alone to enter"}),402
    else:
        if len(encoded_face_train) == 0:
            Ids.append(1)
            encoded_face_train.append(encoded_faces[0])
            return jsonify({"OK": "added"}),200

        for encode_face in encoded_faces:
            matches = face_recognition.compare_faces(encoded_face_train, encode_face)
            faceDist = face_recognition.face_distance(encoded_face_train, encode_face)
            matchIndex = np.argmin(faceDist)
            
            if matches[matchIndex] and faceDist[matchIndex]<0.5:
                
                return jsonify({"error": "You already have account"}),403
        #inseart to my features array the new person feature
        #add the id but it increment by one in database so no need to get from database 
        Ids.append(Ids[len(Ids)-1] +1)
        encoded_face_train.append(encode_face)
        return jsonify({"OK": "added"}),200

# img=cv2.imread("./KnownPeople/Bill Gates.jpeg")
# res=GetUser(img)
# print("elon",res)
# img=cv2.imread("./KnownPeople/Me.jpg")
# res=GetUser(img)
# print("me",res)

# img=cv2.imread("./KnownPeople/Bill Gates.jpeg")
# res=NewUser(img)
# print("reg elon",res)
# img=cv2.imread("./KnownPeople/Me.jpg")
# res=NewUser(img)
# print("reg me",res)
########################################

app =Flask(__name__)

@app.route("/GetImage/",methods=['POST'])
def Get():
    data = request.get_json()
    img =data['image']
    image_data = base64.b64decode(img)
    # Create a BytesIO object to work with the image
    image_stream = BytesIO(image_data)
    # Open the image using PIL
    image = Image.open(image_stream)
    image=np.array(image)
    return GetUser(image)

@app.route("/Valid/",methods=['POST'])
def Insert():
    data = request.get_json()
    img =data['image']
    image_data = base64.b64decode(img)
    # Create a BytesIO object to work with the image
    image_stream = BytesIO(image_data)
    # Open the image using PIL
    image = Image.open(image_stream)
    image=np.array(image)

    return NewUser(image)

if __name__=="__main__":
    app.run(host='0.0.0.0', port=8080,debug=True)

