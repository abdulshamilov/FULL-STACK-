from django.db import models
from django.core.validators import RegexValidator


class Form(models.Model):
    name = models.CharField(max_length=100)

    phone_validator = RegexValidator(
        regex=r'^\d{10}$',
        message="Введите 10 цифр номера без +7"
    )

    phone = models.CharField(
        max_length=12,  # Теперь номер хранится с +7
        validators=[phone_validator],
        help_text="Введите номер без +7"
    )

    message = models.TextField()

    def save(self, *args, **kwargs):
        self.phone = self.phone.strip()  # Убираем пробелы
        if not self.phone.startswith("+7"):
            self.phone = f"+7{self.phone}"
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.name} - {self.phone}"
    

from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
