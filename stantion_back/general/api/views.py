from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny
from general.models import Form
from general.api.serializers import FormSerializer

class FormViewSet(ModelViewSet):
    queryset = Form.objects.all()
    serializer_class = FormSerializer
    permission_classes = [AllowAny]
