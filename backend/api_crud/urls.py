
from django.contrib import admin
from rest_framework.routers import DefaultRouter
from django.urls import include, path

from api_crud.views import OrderViewSet, ProductViewSet

router = DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'orders', OrderViewSet)
# urls
urlpatterns = [
    path('api/v1/movies/', include('movies.urls')),
    path('api/v1/auth/', include('authentication.urls')),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)) 
]