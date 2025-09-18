# Backend Dockerfile
FROM python:3.11-slim

WORKDIR /app

# Cài đặt các thư viện cần thiết
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy toàn bộ mã nguồn
COPY . .

# Cổng chạy uvicorn
EXPOSE 8000

CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]
