from fastapi import APIRouter, Depends 
from sqlalchemy.orm import Session
from controllers.usersController import register_user, login_user
from config.db import get_db
router = APIRouter()

@router.get("/")
def get_users():
    return {"message": "Users endpoint"}

@router.post("/auth/register")
def register(username: str, password: str, email: str, db: Session = Depends(get_db)):
    return register_user(username, password, email, db)

@router.post("/auth/login")
def login(username: str, password: str, db: Session = Depends(get_db)):
    return login_user(username, password, db)