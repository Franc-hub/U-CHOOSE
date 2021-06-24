from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class BaseModel():
    @classmethod
    def get_all(cls):
        return cls.query.all()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
class Student(db.Model,BaseModel):
    __tablename__ = 'student'
    id = db.Column(db.Integer, primary_key=True)
    fullname = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_logged=db.Column(db.Boolean, default=False, nullable=False)

    def __repr__(self):
        return '<Student %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "fullname":self.fullname,
            "email": self.email,
            "is_logged" : self.is_logged
            # do not serialize the password, its a security breach
        }

    def db_post(self):        
        db.session.add(self)
        db.session.commit()

    def set_with_json(self,json):
        
        self.fullname = json["fullname"]
        self.email = json["email"]
        self.is_logged= json["is_logged"]
        self.password = json["password"]


    
