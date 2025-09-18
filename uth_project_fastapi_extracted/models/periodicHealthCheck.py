from pydantic import BaseModel, Field
from typing import Optional, List, Any
from bson import ObjectId

class PyObjectId(str):
    pass

class PeriodichealthcheckModel(BaseModel):
    heartRate: Optional[Any] = Field(None, description="heartRate: { type: Number")

    class Config:
        arbitrary_types_allowed = True
        orm_mode = True


# Mongo collection name: periodicHealthCheck
