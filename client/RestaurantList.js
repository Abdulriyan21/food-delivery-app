import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState([]);
    
    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await axios.get('http://localhost:3000/restaurants/restaurants');
                setRestaurants(response.data);
            } catch (error) {
                console.error('Error fetching restaurants:', error);
            }
        };
        
        fetchRestaurants();
    }, []);
    
    return (
        <Grid container spacing={3}>
            {restaurants.map(restaurant => (
                <Grid item xs={12} sm={6} md={4} key={restaurant._id}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">{restaurant.name}</Typography>
                            <Typography color="textSecondary">{restaurant.cuisine}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default RestaurantList;

