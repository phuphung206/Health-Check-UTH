from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_index():
    return {"message": "Index endpoint"}

from routes import users

def init_routes(app):
    app.include_router(users.router, prefix="/api", tags=["Users"])
