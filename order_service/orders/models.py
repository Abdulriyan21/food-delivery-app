from django.db import models
from django.contrib.postgres.fields import JSONField

class Order(models.Model):
    ORDER_STATUS = (
        ('P', 'Pending'),
        ('C', 'Cooking'),
        ('R', 'Ready'),
        ('D', 'Delivered')
    )
    
    user_id = models.CharField(max_length=100)
    restaurant_id = models.CharField(max_length=100)
    items = JSONField()
    total = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=1, choices=ORDER_STATUS, default='P')
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Order {self.id} - {self.get_status_display()}"

