# Generated by Django 4.2.3 on 2023-07-28 16:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=60)),
                ('endereco', models.CharField(max_length=100)),
                ('telefone', models.BigIntegerField(max_length=11)),
                ('cpf', models.BigIntegerField(max_length=9)),
            ],
        ),
    ]
