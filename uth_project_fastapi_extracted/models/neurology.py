from pydantic import BaseModel, Field
from typing import Optional, List, Any
from bson import ObjectId

class PyObjectId(str):
    pass

class NeurologyModel(BaseModel):
    diagnosis: Optional[Any] = Field(None, description="diagnosis: { type: String")

    class Config:
        arbitrary_types_allowed = True
        orm_mode = True


# Mongo collection name: neurology
