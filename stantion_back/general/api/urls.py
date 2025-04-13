from rest_framework.routers import SimpleRouter
from general.api.views import FormViewSet

router = SimpleRouter()
router.register('forms', FormViewSet, basename = 'form')

urlpatterns = router.urls

