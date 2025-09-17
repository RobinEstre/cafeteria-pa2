# api/views.py
from rest_framework import viewsets

from api_crud.serializer import OrderSerializer, ProductSerializer
from .models import Product, Order


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all().order_by("-created_at")
    serializer_class = OrderSerializer
