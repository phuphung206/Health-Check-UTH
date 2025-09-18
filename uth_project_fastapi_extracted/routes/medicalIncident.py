from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_medical_incidents():
    return {"message": "Medical Incidents endpoint"}
