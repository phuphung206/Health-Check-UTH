from pydantic import BaseModel, Field
from typing import Optional, List, Any
from bson import ObjectId

class PyObjectId(str):
    pass

class QuarantineModel(BaseModel):
    reasonForQuarantine: Optional[Any] = Field(None, description="reasonForQuarantine: { type: String")

    class Config:
        arbitrary_types_allowed = True
        orm_mode = True


# Mongo collection name: quarantine
