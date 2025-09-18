from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_health_records():
    return {"message": "Health Records endpoint"}
