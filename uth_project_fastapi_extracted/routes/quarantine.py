from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_quarantine():
    return {"message": "Quarantine endpoint"}
