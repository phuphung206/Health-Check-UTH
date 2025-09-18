from fastapi import HTTPException, Depends 
from typing import Any
from sqlalchemy.orm import Session
from config.db import get_db
from models.user import User
from utils.auth import hash_password, verify_password, create_access_token
from datetime import timedelta
# Controller stubs converted from JS

async def createUser(payload: Any = None):
    # TODO: port logic from JS
    return {'message':'stub createUser'}

async def getAllUsers(payload: Any = None):
    # TODO: port logic from JS
    return {'message':'stub getAllUsers'}

async def getUserById(payload: Any = None):
    # TODO: port logic from JS
    return {'message':'stub getUserById'}

async def updateUser(payload: Any = None):
    # TODO: port logic from JS
    return {'message':'stub updateUser'}

async def deleteUser(payload: Any = None):
    # TODO: port logic from JS
    return {'message':'stub deleteUser'}

def register_user(username: str, password: str, email: str, db: Session = Depends(get_db)):
    existing_user = db.query(User).filter(User.username == username).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Username already exists")
    
    hashed_pw = hash_password(password)
    new_user = User(username=username, password=hashed_pw, email=email)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return {"message": "User registered successfully", "user_id": new_user.id}

def login_user(username: str, password: str, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == username).first()
    if not user or not verify_password(password, user.password):
        raise HTTPException(status_code=401, detail="Invalid username or password")

    access_token = create_access_token(data={"sub": user.username}, expires_delta=timedelta(minutes=60))
    return {"access_token": access_token, "token_type": "bearer"}
