from pydantic import BaseModel, Field
from typing import Optional, List, Any
from bson import ObjectId

class PyObjectId(str):
    pass

class LaboratoryModel(BaseModel):
    testType: Optional[Any] = Field(None, description="testType: { type: String, required: true")

    class Config:
        arbitrary_types_allowed = True
        orm_mode = True


# Mongo collection name: laboratory
