"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User,Student
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200
@api.route("/students",methods=['GET'])
def all_students():
    students = Student.get_all()
    student_dic = []
    for student in students :
        student_dic.append(student.serialize())
    return jsonify(student_dic),200

@api.route('/students',methods=['POST'])
def create_student ():
    json = request.get_json()
    student = Student()
    student.set_with_json(json)
    student.db_post()
    return jsonify(student.serialize()) ,200 

