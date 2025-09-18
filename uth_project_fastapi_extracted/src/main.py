from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from controllers.usersController import register_user, login_user
from config.db import get_db
from routes import users

# Import thủ công các routers
from routes import (
    users,
    healthRecord,
    index,
    laboratory,
    medicalIncident,
    neurology,
    periodicHealthCheck,
    quarantine
)

app = FastAPI(title="Converted FastAPI from Node.js")

# Cấu hình CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Gắn router cho từng module
app.include_router(users.router, prefix="/users", tags=["Users"])
app.include_router(healthRecord.router, prefix="/health-records", tags=["Health Records"])
app.include_router(index.router, prefix="/index", tags=["Index"])
app.include_router(laboratory.router, prefix="/laboratory", tags=["Laboratory"])
app.include_router(medicalIncident.router, prefix="/medical-incidents", tags=["Medical Incidents"])
app.include_router(neurology.router, prefix="/neurology", tags=["Neurology"])
app.include_router(periodicHealthCheck.router, prefix="/periodic-health-checks", tags=["Periodic Health Checks"])
app.include_router(quarantine.router, prefix="/quarantine", tags=["Quarantine"])
app.include_router(users.router, prefix="/api", tags=["Users"])

@app.get("/")
async def root():
    return {"message": "Hello from FastAPI"}
