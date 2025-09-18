from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_neurology():
    return {"message": "Neurology endpoint"}
