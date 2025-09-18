from pydantic import BaseModel, Field
from typing import Optional, List, Any
from bson import ObjectId

class PyObjectId(str):
    pass

class MedicalincidentModel(BaseModel):
    severityLevel: Optional[Any] = Field(None, description="severityLevel: { type: String")

    class Config:
        arbitrary_types_allowed = True
        orm_mode = True


# Mongo collection name: medicalIncident
