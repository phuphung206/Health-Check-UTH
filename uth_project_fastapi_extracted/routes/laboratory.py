from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_laboratories():
    return {"message": "Laboratory endpoint"}
