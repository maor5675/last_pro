from rest_framework import serializers
from .models import Movie,Cart

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = '__all__'



class postCartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'



class CartSerializer(serializers.ModelSerializer):
    product = ProductSerializer()
    
    class Meta:
        model = Cart
        fields = '__all__'

    # def create(self, validated_data):
    #     product = validated_data.pop('product')
    #     cart_instance = Cart.objects.create(**validated_data)
    #     for produ in product:
    #         Movie.objects.create(item=cart_instance,**produ)
    #     return cart_instance

# class CartSerializer(serializers.ModelSerializer):
#     comments = CommentSerializer(many=True, read_only=True)

#     class Meta:
#           model = Cart
#           fields = '__all__'


#     cart = serializers.PrimaryKeyRelatedField(queryset=Movie.objects.all())
#     content = serializers.CharField()

    # class Meta:
    #      model = Cart
    #      fields = '__all__'

# class CartSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Cart
#         fields = '__all__'


class PutCartSerializer(serializers.ModelSerializer):
     
    class Meta:
        model = Cart
        fields = ['quantity']