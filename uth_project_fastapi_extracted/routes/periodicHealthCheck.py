from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_periodic_health_checks():
    return {"message": "Periodic Health Checks endpoint"}
