from django.shortcuts import render, get_object_or_404

# Create your views here.


from .models import Todo
from .serializer import Todoserializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status


@api_view(["GET", "POST"])
def todo_list(request):
    if request.method == "GET":
        todos = Todo.objects.all()
        serializer = Todoserializer(todos, many=True)
        return Response(serializer.data)
    elif request.method == "POST":
        serializer = Todoserializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "PUT", "PATCH", "DELETE"])
def todo_detail(request, pk):
    todo = get_object_or_404(Todo, id=pk)
    if request.method == "GET":
        serializer = Todoserializer(todo)
        return Response(serializer.data)
    elif request.method == "PUT":
        serializer = Todoserializer(todo, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        todo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
