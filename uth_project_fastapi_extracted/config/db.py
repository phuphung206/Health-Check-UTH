# config/db.py
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# URL kết nối database
DATABASE_URL = "sqlite:///./test.db"  # Hoặc URL của PostgreSQL, MySQL, v.v.

# Tạo engine
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})

# SessionLocal sẽ được dùng để tạo session DB
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base model
Base = declarative_base()

# Hàm get_db để sử dụng trong FastAPI
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
