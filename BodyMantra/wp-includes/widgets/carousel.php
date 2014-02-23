<?php
/**
 * Created by IntelliJ IDEA.
 * User: Ryan
 * Date: 2/23/14
 * Time: 1:20 PM
 */

namespace widgets;


class Carousel extends \WP_Widget {

    public function __construct(){
        parent::__construct('carousel',
            __('Carousel Widget', 'default'),
        array('description' => __('Carousel Widget', 'default'),));
    }

    public function widget($args, $instance){
        $title = apply_filters('carousel', $instance['title']);
        echo $args['before_widget'];
        if(!empty($title))
            echo $title;
        echo $args['after_widget'];
    }

    public function form($instance){
        if ( isset( $instance[ 'title' ] ) ) {
            $title = $instance[ 'title' ];
        }
        else {
            $title = __( 'New title', 'text_domain' );
        }
        ?>
        <p>
            <label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e( 'Title:' ); ?></label>
            <input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>">
        </p>
    <?php
    }

    public function update($new_instance, $old_instance){
        $instance = array();
        $instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';

        return $instance;
    }
} 