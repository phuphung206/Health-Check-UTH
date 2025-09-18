from pydantic import BaseModel, Field
from typing import Optional, List, Any
from bson import ObjectId

class PyObjectId(str):
    pass

class UserModel(BaseModel):
    name: Optional[Any] = Field(None, description="name: { type: String, required: true")

    class Config:
        arbitrary_types_allowed = True
        orm_mode = True


# Mongo collection name: user
# models/user.py
from sqlalchemy import Column, Integer, String
from config.db import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, index=True, nullable=False)
    password = Column(String(255), nullable=False)
    email = Column(String(100), unique=True, index=True, nullable=True)
    full_name = Column(String(100), nullable=True)
